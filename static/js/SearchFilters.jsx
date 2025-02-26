import {
  DropdownModal,
  DropdownButton,
  DropdownOptionList,
  LoadingMessage,
} from './Misc';
import React  from 'react';
import ReactDOM  from 'react-dom';
import Sefaria  from './sefaria/sefaria';
import $  from './sefaria/sefariaJquery';
import SearchState from './sefaria/searchState';
import classNames  from 'classnames';
import PropTypes  from 'prop-types';
import Component      from 'react-class';


class SearchFilters extends Component {
  constructor(props) {
    super(props);
    const hasFilters = props.searchState.availableFilters.length > 0;
    const openedCategory = hasFilters ? props.searchState.availableFilters[0] : null;
    this.state = {
      openedCategory,
      openedCategoryBooks: hasFilters ? openedCategory.getLeafNodes() : [],
      isExactSearch: props.searchState.field === props.searchState.fieldExact
    }
  }
  componentWillReceiveProps(newProps) {
    // Save current filters
    // this.props
    // todo: check for cases when we want to rebuild / not
    const { field, fieldExact } = this.props.searchState;
    if ((newProps.query != this.props.query)
        || (newProps.searchState.availableFilters.length !== this.props.searchState.availableFilters.length)) {

      const hasFilters = newProps.searchState.availableFilters.length > 0;
      const openedCategory = hasFilters ? newProps.searchState.availableFilters[0] : null;
      this.setState({
        openedCategory,
        openedCategoryBooks: hasFilters ? openedCategory.getLeafNodes() : [],
        isExactSearch: field === fieldExact
      });
    }
    // todo: logically, we should be unapplying filters as well.
    // Because we compute filter removal from teh same object, this ends up sliding in messily in the setState.
    // Hard to see how to get it through the front door.
      //if (this.state.openedCategory) {
      //   debugger;
      // }
     /*
   if (newProps.appliedFilters &&
              ((newProps.appliedFilters.length !== this.props.appliedFilters.length)
               || !(newProps.appliedFilters.every((v,i) => v === this.props.appliedFilters[i]))
              )
            ) {
      if (this.state.openedCategory) {
        this.handleFocusCategory(this.state.openedCategory);
      }
    } */
  }
  getSelectedTitles(lang) {
    let results = [];
    for (let i = 0; i < this.props.searchState.availableFilters.length; i++) {
        const tempSelected = this.props.searchState.availableFilters[i].getSelectedTitles(lang);
        results = results.concat(tempSelected);
    }
    return results;
  }
  handleFocusCategory(filterNode) {
    var leaves = filterNode.getLeafNodes();
    this.setState({
      openedCategory: filterNode,
      openedCategoryBooks: leaves
    })
  }
  resetOpenedCategoryBooks() {
    this.setState({
      openedCategoryBooks: []
    })
  }
  toggleExactSearch() {
    let newExactSearch = !this.state.isExactSearch;
    if (newExactSearch) {
      this.props.updateAppliedOptionField(this.props.searchState.fieldExact);
    } else {
      this.props.updateAppliedOptionField(this.props.searchState.fieldBroad);
    }
    this.setState({isExactSearch: newExactSearch});

  }
  _typeButton(en, he, total, on_click, active) {
    // if (!total) { return "" }
      var total = this._addCommas(total);
      var classes = classNames({"search-dropdown-button": 1, active});

      return (
        <div className={classes} onClick={on_click} onKeyPress={function(e) {e.charCode == 13 ? on_click(e):null}.bind(this)} role="button" tabIndex="0">
          <div className="type-button-title">
            <span className="int-en">{`${en} (${total})`}</span>
            <span className="int-he">{`${he} (${total})`}</span>
          </div>
        </div>
      );
  }
  _addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {

    var runningQueryLine = (<LoadingMessage message="Searching..." heMessage="מבצע חיפוש..." />);

    var buttons = (
      <div className="type-buttons">
        {this._typeButton("Texts", "טקסטים", this.props.textTotal, this.props.clickTextButton, (this.props.type == "text"))}
        {this._typeButton("Sheets", "דפי מקורות", this.props.sheetTotal, this.props.clickSheetButton, (this.props.type == "sheet"))}
      </div>
    );

    var selected_filters = (<div className="results-count">
          <span className="int-en">
            {(!!this.props.searchState.appliedFilters.length && !!this.props.total)?(this.getSelectedTitles("en").join(", ")):""}
          </span>
          <span className="int-he">
            {(!!this.props.searchState.appliedFilters.length && !!this.props.total)?(this.getSelectedTitles("he").join(", ")):""}
          </span>
      </div>);
    const filter_panel = (this.props.type === 'text' ?
      <TextSearchFilterPanel
        toggleFilterView={this.props.toggleFilterView}
        toggleExactSearch={this.toggleExactSearch}
        displayFilters={this.props.displayFilters}
        openedCategory={this.state.openedCategory}
        openedCategoryBooks={this.state.openedCategoryBooks}
        updateAppliedFilter={this.props.updateAppliedFilter}
        availableFilters={this.props.searchState.availableFilters}
        closeBox={this.props.closeFilterView}
        isExactSearch={this.props.searchState.fieldExact === this.props.searchState.field}
        handleFocusCategory={this.handleFocusCategory}
        resetOpenedCategoryBooks={this.resetOpenedCategoryBooks}
      /> :
      <SheetSearchFilterPanel
        toggleFilterView={this.props.toggleFilterView}
        displayFilters={this.props.displayFilters}
        updateAppliedFilter={this.props.updateAppliedFilter}
        availableFilters={this.props.searchState.availableFilters}
        closeBox={this.props.closeFilterView}
      />
    );

    var sort_panel = (<SearchSortBox
          type={this.props.type}
          visible={this.props.displaySort}
          toggleSortView={this.props.toggleSortView}
          updateAppliedOptionSort={this.props.updateAppliedOptionSort}
          closeBox={this.props.closeSortView}
          sortType={this.props.searchState.sortType}/>);
    return (
      <div className="searchTopMatter">
        <div className="searchStatusLine">
          { (this.props.isQueryRunning) ? runningQueryLine : null }
          { (this.props.searchState.availableFilters.length > 0) ? selected_filters : ""}
        </div>
        <div className="searchButtonsBar sans-serif">
          { buttons }
          <div className="filterSortFlexbox">
            {filter_panel}
            {sort_panel}
          </div>
        </div>
      </div>);
  }
}
SearchFilters.propTypes = {
  query:                PropTypes.string,
  searchState:          PropTypes.object,
  total:                PropTypes.number,
  textTotal:            PropTypes.number,
  sheetTotal:           PropTypes.number,
  updateAppliedFilter:  PropTypes.func,
  updateAppliedOptionField: PropTypes.func,
  updateAppliedOptionSort: PropTypes.func,
  isQueryRunning:       PropTypes.bool,
  type:                 PropTypes.string,
  clickTextButton:      PropTypes.func,
  clickSheetButton:     PropTypes.func,
  showResultsOverlay:   PropTypes.func,
  displayFilters:       PropTypes.bool,
  displaySort:          PropTypes.bool,
  toggleFilterView:     PropTypes.func,
  toggleSortView:       PropTypes.func,
  closeFilterView:      PropTypes.func,
  closeSortView:        PropTypes.func
};


class SearchFilterTabRow extends Component {
  render() {
    return (
      <div className="searchFilterTabRow">
        {this.props.tabs.map( t =>
          <div key={t.en} className={classNames({'search-dropdown-button': 1, active: this.props.activeTab === t.en})} onClick={() => { this.props.changeTab(t.en); }}>
            <span className="int-en">{t.en}</span>
            <span className="int-he" dir="rtl">{t.he}</span>
          </div>
        )}
      </div>
    );
  }
}
SearchFilterTabRow.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
}

class SheetSearchFilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Topics',
    }
  }
  changeTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({activeTab: tab});
    }
  }
  render() {
    const collectionFilters = this.props.availableFilters.filter(filter => filter.aggType === 'collections' && filter.title);
    const tagFilters = this.props.availableFilters.filter(filter => filter.aggType.match(/^topics/));

    return (
      <DropdownModal positionUnset={true} close={this.props.closeBox} isOpen={this.props.displayFilters}>
        <DropdownButton
          isOpen={this.props.displayFilters}
          toggle={this.props.toggleFilterView}
          enText={"Filter"}
          heText={"סינון"}
        />
        {this.props.displayFilters ? 
        <div key={this.state.activeTab} className="searchFilterBoxes" role="dialog">
          <SearchFilterTabRow
            tabs={[ {en: 'Topics', he: 'נושאים'}, {en: 'Collections', he: 'אסופות'}]}
            activeTab={this.state.activeTab}
            changeTab={this.changeTab}
          />
          { this.state.activeTab === 'Collections' ?
            <div className="searchFilterCategoryBox searchFilterSheetBox">
            {collectionFilters.map(filter => (
                  <SearchFilter
                    filter={filter}
                    isInFocus={false}
                    updateSelected={this.props.updateAppliedFilter}
                    closeBox={this.props.closeBox}
                    key={filter.aggKey}
                  />
                )
            )}
            </div> :
            <div className="searchFilterCategoryBox searchFilterSheetBox tag-filter-outer">
              {tagFilters.map(filter => (
                <SearchTagFilter
                  filter={filter}
                  updateSelected={this.props.updateAppliedFilter}
                  key={filter.aggKey}
                />
              ))}
            </div>
          }
        </div>
        : null }
      </DropdownModal>
    );
  }
}
SheetSearchFilterPanel.propTypes = {
  toggleFilterView:    PropTypes.func.isRequired,
  displayFilters:      PropTypes.bool.isRequired,
  updateAppliedFilter: PropTypes.func.isRequired,
  availableFilters:    PropTypes.array.isRequired,
  closeBox:            PropTypes.func.isRequired,
};

class TextSearchFilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Titles',
    };
  }
  changeTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({activeTab: tab});
    }
  }
  render() {
    return (
      <DropdownModal positionUnset={true} close={this.props.closeBox} isOpen={this.props.displayFilters}>
        <DropdownButton
          isOpen={this.props.displayFilters}
          toggle={this.props.toggleFilterView}
          enText={"Filter"}
          heText={"סינון"}
        />
        {this.props.displayFilters ? 
        <div className="searchFilterBoxes" role="dialog">
          <SearchFilterTabRow
            tabs={[{en: 'Titles', he: 'מקורות'}, {en: 'Options', he: 'אופציות'}]}
            activeTab={this.state.activeTab}
            changeTab={this.changeTab}
          />
          { this.state.activeTab === 'Titles' ?
            (<div className="searchFilterBoxRow">
              <div className="searchFilterCategoryBox">
              {this.props.availableFilters.map(filter => {
                  return (<SearchFilter
                      filter={filter}
                      isInFocus={this.props.openedCategory === filter}
                      focusCategory={this.props.handleFocusCategory}
                      updateSelected={this.props.updateAppliedFilter}
                      closeBox={this.props.closeBox}
                      key={filter.aggKey}/>);
              })}
              </div>
              <div className="searchFilterBookBox">
              {this.props.openedCategoryBooks.map(filter => (
                <SearchFilter
                  filter={filter}
                  openedCategory={this.props.openedCategory}
                  resetOpenedCategoryBooks={this.props.resetOpenedCategoryBooks}
                  updateSelected={this.props.updateAppliedFilter}
                  key={filter.aggKey}/>
              ))}
              </div>
            </div>) : (
              <div className={"searchFilterExactBox"}>
                <SearchFilterExactBox
                  selected={this.props.isExactSearch}
                  checkBoxClick={this.props.toggleExactSearch}
                  />
              </div>
            )
          }
          <div style={{clear: "both"}}/>
        </div>
        : null }
      </DropdownModal>
    );
  }
}
TextSearchFilterPanel.propTypes = {
  toggleFilterView:    PropTypes.func,
  displayFilters:      PropTypes.bool,
  availableFilters:    PropTypes.array,
  openedCategory:      PropTypes.object,
  updateAppliedFilter: PropTypes.func,
  openedCategoryBooks: PropTypes.array,
  isExactSearch:       PropTypes.bool,
  toggleExactSearch:   PropTypes.func,
  closeBox:            PropTypes.func,
  handleFocusCategory: PropTypes.func,
};


class SearchSortBox extends Component {
  handleClick(sortType) {
    if (sortType === this.props.sortType) {
      return;
    }
    this.props.updateAppliedOptionSort(sortType);
    this.props.toggleSortView();
  }
  //<i className={(this.props.visible) ? "fa fa-caret-down fa-angle-down":"fa fa-caret-down fa-angle-up"} />
  render() {
    const filterTextClasses = classNames({ searchFilterToggle: 1, active: this.props.visible });
    return (<DropdownModal close={this.props.closeBox} isOpen={this.props.visible}>
      <DropdownButton
        isOpen={this.props.visible}
        toggle={this.props.toggleSortView}
        enText={"Sort"}
        heText={"מיון"}
      />
      <DropdownOptionList
        isOpen={this.props.visible}
        options={SearchState.metadataByType[this.props.type].sortTypeArray}
        currOptionSelected={this.props.sortType}
        handleClick={this.handleClick}
      />
    </DropdownModal>);
  }
}
SearchSortBox.propTypes = {
  type:                    PropTypes.string.isRequired,
  visible:                 PropTypes.bool,
  toggleSortView:          PropTypes.func,
  updateAppliedOptionSort: PropTypes.func,
  closeBox:                PropTypes.func,
  sortType:                PropTypes.string,
};


class SearchFilterExactBox extends Component {
  handleClick() {
    this.props.checkBoxClick();
  }
  handleKeyPress(e) {
    if (e.charCode == 13) { // enter
      this.handleClick(e);
    }
  }
  handleKeyDown(e) {
    if (e.keyCode === 9) { //9 is tab
      e.stopPropagation();
      var lastTab = $("div[role='dialog']").find(':tabbable').last();
      var firstTab = $("div[role='dialog']").find(':tabbable').first();
      if (e.shiftKey) {
        if ($(e.target).is(firstTab)) {
          $(lastTab).focus();
          e.preventDefault();
        }
      }
      else {
        if ($(e.target).is(lastTab)) {
          $(firstTab).focus();
          e.preventDefault();
        }
      }
    }
  }
  render() {
    return (<li>
      <input type="checkbox" id="searchFilterExactBox" className="filter" checked={this.props.selected} onChange={this.handleClick}/>
      <label tabIndex="0" onClick={this.handleClick} onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress}><span></span></label>
      <span className="int-en"><span className="filter-title">{"Exact search"}</span></span>
      <span className="int-he" dir="rtl"><span className="filter-title">{"חיפוש מדויק"}</span></span>
    </li>);
  }
}
SearchFilterExactBox.propTypes = {
  selected:      PropTypes.bool,
  checkBoxClick: PropTypes.func
};


class SearchTagFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: props.filter.selected};
  }
  componentWillReceiveProps(newProps) {
    if (newProps.filter.selected != this.state.selected) {
      this.setState({selected: newProps.filter.selected});
    }
  }
  handleClick(evt) {
    this.props.updateSelected(this.props.filter, 'tags')
  }
  handleKeyPress(e) {
    if (e.charCode == 13) { // enter
      this.handleFilterClick(e);
    }
  }
  render() {
    const { filter } = this.props;
    const enTitle = filter.title || filter.heTitle;
    const heTitle = filter.heTitle || filter.title;
    if (!enTitle) { return null; } // Don't show option to filter by no topic or no collection
    const enTitleIsHe = !filter.title && !!filter.heTitle;
    const heTitleIsEn = !filter.heTitle && !!filter.title;

    const classes = classNames({"type-button": 1, "tag-filter": 1, active: this.state.selected === 1})
    return (
      <div className={classes} onClick={this.handleClick}>
        <span className={classNames({'int-en': 1, 'heInEn': enTitleIsHe})} dir={enTitleIsHe ? 'rtl' : 'ltr'}><span className="filter-title">{enTitle}</span> <span className="filter-count">({filter.docCount})</span></span>
        <span className={classNames({'int-he': 1, 'enInHe': heTitleIsEn})} dir={heTitleIsEn ? 'ltr' : 'rtl'}><span className="filter-title">{heTitle}</span> <span className="filter-count">({filter.docCount})</span></span>
      </div>
    )
  }
}
SearchTagFilter.propTypes = {
  updateSelected: PropTypes.func.isRequired,
  filter:         PropTypes.object.isRequired,
}

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: props.filter.selected};
  }
  componentWillReceiveProps(newProps) {
    if (newProps.filter.selected != this.state.selected) {
      this.setState({selected: newProps.filter.selected});
    }
  }
  // Can't set indeterminate in the render phase.  https://github.com/facebook/react/issues/1798
  componentDidMount() {
    ReactDOM.findDOMNode(this).querySelector("input").indeterminate = this.props.filter.isPartial();
    if (this.props.filter.isPartial()) {
      ReactDOM.findDOMNode(this).querySelector("label").setAttribute("aria-checked", "mixed");
    }
    else {
      ReactDOM.findDOMNode(this).querySelector("label").setAttribute("aria-checked", this.state.selected==1);
    }
  }
  componentDidUpdate() {
    ReactDOM.findDOMNode(this).querySelector("input").indeterminate = this.props.filter.isPartial();
    if (this.props.filter.isPartial()) {
      ReactDOM.findDOMNode(this).querySelector("label").setAttribute("aria-checked", "mixed");
    }
    else {
      ReactDOM.findDOMNode(this).querySelector("label").setAttribute("aria-checked", this.state.selected==1);
    }

    if ($(".searchFilterBookBox").children().length > 0 && !$('.searchFilterBookBox li label').is(':focus')) { // unoptimized code to focus on top of searchFilterBookBox when not previously selected. For a11y.
      $(".searchFilterBookBox").find(':focusable').first().focus();
    }

  }
  handleFilterClick(evt) {
    this.props.updateSelected(this.props.filter)
  }
  handleFocusCategory() {
    if (this.props.focusCategory) {
      this.props.focusCategory(this.props.filter)
    }
  }
  handleKeyPress(e) {
    if (e.charCode == 13) { // enter
      this.handleFilterClick(e);
    }
    else if (e.charCode == 32) { //space
      e.preventDefault();
      this.handleFocusCategory(e);
    }
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) { //27 is escape
      e.stopPropagation();
      if (this.props.closeBox) {
        this.props.closeBox()
      }
      else {
        $("#label-for-"+this.props.openedCategory.title).focus();
        this.props.resetOpenedCategoryBooks();
      }
    }
    else if (e.keyCode === 9) { //9 is tab
      e.stopPropagation();
      var lastTab = $("div[role='dialog']").find(':tabbable').last();
      var firstTab = $("div[role='dialog']").find(':tabbable').first();
      if (e.shiftKey) {
        if ($(e.target).is(firstTab)) {
          $(lastTab).focus();
          e.preventDefault();
        }
      }
      else {
        if ($(e.target).is(lastTab)) {
          $(firstTab).focus();
          e.preventDefault();
        }
      }
    }
  }
  render() {
    const { filter, isInFocus } = this.props;
    let enTitle = filter.title || filter.heTitle;
    const enTitleIsHe = !filter.title && !!filter.heTitle;
    let heTitle = filter.heTitle || filter.title;
    const heTitleIsEn = !filter.heTitle && !!filter.title;
    return(
      <li className={classNames({active: isInFocus})} onClick={this.handleFocusCategory}>
        <div className="checkboxAndText">
          <input type="checkbox" id={filter.aggKey} className="filter" checked={this.state.selected == 1} onChange={this.handleFilterClick}/>
          <label onClick={this.handleFilterClick} id={"label-for-"+this.props.filter.aggKey} tabIndex="0" onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress} aria-label={"Click enter to toggle search filter for "+filter.title+" and space bar to toggle specific books in this category. Escape exits out of this modal"}><span></span></label>
          <span className={classNames({'int-en': 1, 'heInEn': enTitleIsHe})} dir={enTitleIsHe ? 'rtl' : 'ltr'}><span className="filter-title">{enTitle}</span>&nbsp;<span className="filter-count">({filter.docCount})</span></span>
          <span className={classNames({'int-he': 1, 'enInHe': heTitleIsEn})} dir={heTitleIsEn ? 'ltr' : 'rtl'}><span className="filter-title">{heTitle}</span>&nbsp;<span className="filter-count">({filter.docCount})</span></span>
        </div>
        {isInFocus?<span className="int-en"><img src="/static/img/arrow-right.png"></img></span>:""}
        {isInFocus?<span className="int-he"><img src="/static/img/arrow-left.png"></img></span>:""}
      </li>);
  }
}
SearchFilter.propTypes = {
  filter:         PropTypes.object.isRequired,
  isInFocus:      PropTypes.bool,
  updateSelected: PropTypes.func.isRequired,
  focusCategory:  PropTypes.func,
};


export default SearchFilters;
