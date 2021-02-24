import django
django.setup()


from sefaria.model import *
from sefaria.system.database import db

from io import StringIO
from html.parser import HTMLParser

class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs= True
        self.text = StringIO()
    def handle_data(self, d):
        self.text.write(d)
    def get_data(self):
        return self.text.getvalue()

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()


sheets = db.sheets.find()

all_suspect_sheets = set([])

sheets_with_default_en_in_outsideBiText_en = set([])
sheets_with_default_he_in_outsideBiText_he = set([])

sheets_with_empty_outsideBiText_en = set([])
sheets_with_empty_outsideBiText_he = set([])




for sheet in sheets:
	sources = sheet.get("sources", [])
	for source in sources:
		if "outsideBiText" in source:

			if source["outsideBiText"]["en"] == None or strip_tags(source["outsideBiText"]["en"]) == "":
				source["outsideText"] = source["outsideBiText"]["he"]
				del source["outsideBiText"]
				sheets_with_empty_outsideBiText_en.add(sheet["id"])

			elif source["outsideBiText"]["he"] == None or strip_tags(source["outsideBiText"]["he"]) == "":
				source["outsideText"] = source["outsideBiText"]["en"]
				del source["outsideBiText"]
				sheets_with_empty_outsideBiText_he.add(sheet["id"])

			elif source["outsideBiText"]["en"] != None and strip_tags(source["outsideBiText"]["en"]) == "English":
				source["outsideText"] = source["outsideBiText"]["he"]
				del source["outsideBiText"]
				sheets_with_default_en_in_outsideBiText_en.add(sheet["id"])


			elif source["outsideBiText"]["he"] != None and strip_tags(source["outsideBiText"]["he"]) == "עברית":
				source["outsideText"] = source["outsideBiText"]["en"]
				del source["outsideBiText"]
				sheets_with_default_he_in_outsideBiText_he.add(sheet["id"])

	db.sheets.save(sheet)




all_suspect_sheets |= sheets_with_default_he_in_outsideBiText_he
all_suspect_sheets |= sheets_with_default_en_in_outsideBiText_en
all_suspect_sheets |= sheets_with_empty_outsideBiText_en
all_suspect_sheets |= sheets_with_empty_outsideBiText_he

print("****************************")
print("sheets_with_default_en_in_outsideBiText_en:" + str(len(sheets_with_default_en_in_outsideBiText_en)))
print("****************************")
print("sheets_with_default_he_in_outsideBiText_he:" + str(len(sheets_with_default_he_in_outsideBiText_he)))
print("****************************")
print("sheets_with_empty_outsideBiText_en:" + str(len(sheets_with_empty_outsideBiText_en)))
print("****************************")
print("sheets_with_empty_outsideBiText_he:" + str(len(sheets_with_empty_outsideBiText_he)))
print("****************************")
print("all_suspect_sheets:" + str(len(all_suspect_sheets)))

print(all_suspect_sheets)