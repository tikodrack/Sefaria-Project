import django
django.setup()

import csv
import json
import collections

from sefaria.model import *
from sefaria.system import exceptions
from sefaria.system.database import db

mp3_filenames = ["FL30604395.mp3", "FL30604402.mp3", "FL30604409.mp3", "FL30604416.mp3", "FL30604423.mp3", "FL30604430.mp3", "FL30604437.mp3", "FL30604444.mp3", "FL30604451.mp3", "FL30604458.mp3", "FL30804633.mp3", "FL30804640.mp3", "FL30604465.mp3", "FL30604472.mp3", "FL30604479.mp3", "FL30604486.mp3", "FL30604493.mp3", "FL30604500.mp3", "FL30604507.mp3", "FL30604514.mp3", "FL30604521.mp3", "FL30604528.mp3", "FL30604535.mp3", "FL30604542.mp3", "FL30604549.mp3", "FL30604556.mp3", "FL30604563.mp3", "FL30604570.mp3", "FL30604577.mp3", "FL30604584.mp3", "FL30604591.mp3", "FL30010650.mp3", "FL30604605.mp3", "FL30604612.mp3", "FL30604619.mp3", "FL30604626.mp3", "FL30604633.mp3", "FL30604640.mp3", "FL30604647.mp3", "FL30604654.mp3", "FL30604661.mp3", "FL30604668.mp3", "FL30604675.mp3", "FL30604682.mp3", "FL30604689.mp3", "FL30604696.mp3", "FL30604717.mp3", "FL30604724.mp3", "FL30604731.mp3", "FL30604738.mp3", "FL30604745.mp3", "FL30604752.mp3", "FL30604759.mp3", "FL30604766.mp3", "FL30604773.mp3", "FL30604780.mp3", "FL30604787.mp3", "FL30604794.mp3", "FL30604801.mp3", "FL30604808.mp3", "FL30604815.mp3", "FL30604822.mp3", "FL30604829.mp3", "FL30604836.mp3", "FL30604843.mp3", "FL30604850.mp3", "FL30604885.mp3", "FL30604892.mp3", "FL30604899.mp3", "FL30604906.mp3", "FL30604913.mp3", "FL30604920.mp3", "FL30604927.mp3", "FL30604934.mp3", "FL30604941.mp3", "FL30604948.mp3", "FL30604955.mp3", "FL30604962.mp3", "FL30604969.mp3", "FL30604976.mp3", "FL30604983.mp3", "FL30604990.mp3", "FL30604997.mp3", "FL30605004.mp3", "FL30605011.mp3", "FL30605018.mp3", "FL30605053.mp3", "FL30605060.mp3", "FL30605067.mp3", "FL30605074.mp3", "FL30605081.mp3", "FL30605088.mp3", "FL30605095.mp3", "FL30605102.mp3", "FL30605109.mp3", "FL30605116.mp3", "FL30605123.mp3", "FL30605130.mp3", "FL30605137.mp3", "FL30605144.mp3", "FL30605151.mp3", "FL30605158.mp3", "FL30605165.mp3", "FL30605172.mp3"]

metadata_filenames = ["y-05050_01-cas_a.txt", "y-05050_01-cas_b.txt", "y-05050_02-cas_a.txt", "y-05050_02-cas_b.txt", "y-05050_03-cas_a.txt", "y-05050_03-cas_b.txt", "y-05050_04-cas_a.txt", "y-05050_04-cas_b.txt", "y-05050_05-cas_a.txt", "y-05050_05-cas_b.txt", "y-05050_06-cas_a.txt", "y-05050_06-cas_b.txt", "y-05050_07-cas_a.txt", "y-05050_07-cas_b.txt", "y-05050_08-cas_a.txt", "y-05050_08-cas_b.txt", "y-05050_09-cas_a.txt", "y-05050_09-cas_b.txt", "y-05050_10-cas_a.txt", "y-05050_10-cas_b.txt", "y-05050_11-cas_a.txt", "y-05050_11-cas_b.txt", "y-05050_12-cas_a.txt", "y-05050_12-cas_b.txt", "y-05050_13-cas_a.txt", "y-05050_13-cas_b.txt", "y-05050_14-cas_a.txt", "y-05050_14-cas_b.txt", "y-05050_15-cas_a.txt", "y-05050_15-cas_b.txt", "y-05050_16-cas_a.txt", "y-05050_16-cas_b.txt", "y-05050_17-cas_a.txt", "y-05050_17-cas_b.txt", "y-05050_18-cas_a.txt", "y-05050_18-cas_b.txt", "y-05050_19-cas_a.txt", "y-05050_19-cas_b.txt", "y-05050_20-cas_a.txt", "y-05050_20-cas_b.txt", "y-05050_21-cas_a.txt", "y-05050_21-cas_b.txt", "y-05050_22-cas_a.txt", "y-05050_22-cas_b.txt", "y-05050_23-cas_a.txt", "y-05050_23-cas_b.txt", "y-05050_25-cas_a.txt", "y-05050_25-cas_b.txt", "y-05050_26-cas_a.txt", "y-05050_26-cas_b.txt", "y-05050_27-cas_a.txt", "y-05050_27-cas_b.txt", "y-05050_28-cas_a.txt", "y-05050_28-cas_b.txt", "y-05050_29-cas_a.txt", "y-05050_29-cas_b.txt", "y-05050_30-cas_a.txt", "y-05050_30-cas_b.txt", "y-05050_31-cas_a.txt", "y-05050_31-cas_b.txt", "y-05050_32-cas_a.txt", "y-05050_32-cas_b.txt", "y-05050_33-cas_a.txt", "y-05050_33-cas_b.txt", "y-05050_34-cas_a.txt", "y-05050_34-cas_b.txt", "y-05050_37-cas_a.txt", "y-05050_37-cas_b.txt", "y-05050_38-cas_a.txt", "y-05050_38-cas_b.txt", "y-05050_39-cas_a.txt", "y-05050_39-cas_b.txt", "y-05050_40-cas_a.txt", "y-05050_40-cas_b.txt", "y-05050_41-cas_a.txt", "y-05050_41-cas_b.txt", "y-05050_42-cas_a.txt", "y-05050_42-cas_b.txt", "y-05050_43-cas_a.txt", "y-05050_43-cas_b.txt", "y-05050_44-cas_a.txt", "y-05050_44-cas_b.txt", "y-05050_45-cas_a.txt", "y-05050_45-cas_b.txt", "y-05050_46-cas_a.txt", "y-05050_46-cas_b.txt", "y-05050_49-cas_a.txt", "y-05050_49-cas_b.txt", "y-05050_50-cas_a.txt", "y-05050_50-cas_b.txt", "y-05050_51-cas_a.txt", "y-05050_51-cas_b.txt", "y-05050_52-cas_a.txt", "y-05050_52-cas_b.txt", "y-05050_53-cas_a.txt", "y-05050_53-cas_b.txt", "y-05050_54-cas_a.txt", "y-05050_54-cas_b.txt", "y-05050_55-cas_a.txt", "y-05050_55-cas_b.txt", "y-05050_56-cas_a.txt", "y-05050_56-cas_b.txt", "y-05050_57-cas_a.txt", "y-05050_57-cas_b.txt"]

metadata_starting_refs = ["Genesis 1:1", "Genesis 3:22", "Genesis 6:9", "Genesis 10:15", "Genesis 12:1", "Genesis 16:1", "Genesis 18:1", "Genesis 21:22", "Genesis 23:1", "Genesis 24:52", "Genesis 25:19", "Genesis 27:30", "Genesis 28:10", "Genesis 31:4", "Genesis 32:4", "Genesis 35:6", "Genesis 37:1", "Genesis 39:7", "Genesis 41:1", "Genesis 42:26", "Genesis 44:18", "Genesis 46:28", "Genesis 47:28", "Genesis 49:27", "Exodus 1:1", "Exodus 4:18", "Exodus 6:2", "Exodus 9:1", "Exodus 10:1", "Exodus 12:21", "Exodus 13:17", "Exodus 15:27", "Exodus 18:1", "Exodus 19:20", "Exodus 21:1", "Exodus 23:20", "Exodus 25:1", "Exodus 26:31", "Exodus 27:20", "Exodus 29:38", "Exodus 30:11", "Exodus 33:17", "Exodus 35:1", "Exodus 37:1", "Exodus 38:21", "Exodus 40:1", "Leviticus 1:1", "Leviticus 4:22", "Leviticus 6:1", "Leviticus 8:1", "Leviticus 9:1", "Leviticus 11:29", "Leviticus 12:1", "Leviticus 13:47", "Leviticus 14:1", "Leviticus 15:16", "Leviticus 16:1", "Leviticus 18:1", "Leviticus 19:1", "Leviticus 20:8", "Leviticus 21:1", "Leviticus 23:23", "Leviticus 25:1", "Leviticus 25:39", "Leviticus 26:3", "Leviticus 27:14", "Numbers 1:1", "Numbers 3:14", "Numbers 4:21", "Numbers 7:30", "Numbers 8:1", "Numbers 10:29", "Numbers 13:1", "Numbers 15:4", "Numbers 16:1", "Numbers 18:8", "Numbers 19:1", "Numbers 21:17", "Numbers 22:2", "Numbers 23:27", "Numbers 25:10", "Numbers 28:1", "Numbers 30:2", "Numbers 32:1", "Numbers 33:1", "Numbers 36:1", "Deuteronomy 1:1", "Deuteronomy 2:31", "Deuteronomy 3:23", "Deuteronomy 5:1", "Deuteronomy 7:12", "Deuteronomy 10:12", "Deuteronomy 11:26", "Deuteronomy 14:22", "Deuteronomy 16:18", "Deuteronomy 19:14", "Deuteronomy 21:10", "Deuteronomy 23:22", "Deuteronomy 26:1", "Deuteronomy 28:12", "Deuteronomy 29:9", "Deuteronomy 30:11", "Deuteronomy 31:1", "Deuteronomy 31:20"]

def generate_timestamps_from_array(media_array, mp3_file_uri, source, source_he, media_type, license, source_site, description, description_he ):
    data = {
        'media_url': mp3_file_uri,
        'source': source,
        'source_he': source_he,
        'media_type': media_type,
        'license': license,
        'source_site': source_site,
        'description': description,
        'description_he': description_he
    }

    refs = []

    for ref in media_array:

        if (media_array[ref]['end_time']):
            refs.append({
                "sefaria_ref": ref,
                "start_time": media_array[ref]['start_time'],
                "end_time": media_array[ref]['end_time'],
            })

    data["ref"] = refs

    db.media.save(data)
    db.media.ensure_index("ref.sefaria_ref")

def generate_start_end_times_for_segment(filename, starting_ref):
    with open(filename, newline='') as csvfile:
        csv_reader = csv.reader(csvfile, delimiter='\t')
        r = Ref(starting_ref)
        refs = collections.defaultdict(list)
        previous_r = None

        for row in csv_reader:
            if previous_r:
                refs[previous_r["ref"]]["start_time"] = previous_r["time"]
                refs[previous_r["ref"]]["end_time"] = row[0]

            previous_r = {
                'ref': r.normal(),
                'time': row[0]
                          }


            refs[r.normal()] = {
                "start_time": row[0],
                "end_time": None
            }

            r = r.next_segment_ref()
            if r == None:
                print(f"error at {previous_r} in {filename}")
                break

        return(refs)


print(len(metadata_filenames))
print(len(mp3_filenames))


for i in range(len(mp3_filenames)):
    media = generate_start_end_times_for_segment(f'scripts/torah_audio/Yemenite/{metadata_filenames[i]}', metadata_starting_refs[i])


    generate_timestamps_from_array(
        media_array = dict(media),
        mp3_file_uri = f"https://storage.googleapis.com/sefaria-audio/yemenite/{mp3_filenames[i]}",
        source = 'Aharon Amram',
        source_he = 'אהרן עמרם',
        media_type = 'Torah Reading',
        license = 'From the collection of the National Library of Israel, courtesy of: Aharon Amram',
        source_site = 'https://www.nli.org.il/en/items/NNL_MUSIC_AL000248015/NLI',
        description = 'Yemenite',
        description_he = 'תימני'
    )