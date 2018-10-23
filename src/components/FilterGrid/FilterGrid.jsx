import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';
import InfoGnome from '../InfoGnome/InfoGnome';
import './FilterGrid.css';
const { Toolbar, Data, Formatters } = require('react-data-grid-addons');
const { ImageFormatter } = Formatters;
const { Selectors } = Data;

export class FilterGrid extends Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      {
        key: 'thumbnail',
        name: 'AVATAR',
        formatter: ImageFormatter,
        filterable: true,
        sortable: true,
        width: 70,
      },
      {
        key: 'name',
        name: 'NAME',
        filterable: true,
        sortable: true,
        width: 200,
      },
      {
        key: 'age',
        name: 'AGE',
        filterable: true,
        sortable: true,
        width: 50
      },
      {
        key: 'weight',
        name: 'WEIGHT',
        filterable: true,
        sortable: true,
        width: 85
      },
      {
        key: 'height',
        name: 'HEIGHT',
        filterable: true,
        sortable: true,
        width: 85
      },
      {
        key: 'hair_color',
        name: 'HAIR',
        filterable: true,
        sortable: true,
        width: 60
      },
      {
        key: 'professions',
        name: 'PROFESSIONS',
        filterable: true,
        sortable: true
      },
      {
        key: 'friends',
        name: 'FRIENDS',
        filterable: true,
        sortable: true
      }
    ];
    this.state = {
      row: {},
      rows: props.brastlewark,
      filters: {},
      sortColumn: null,
      sortDirection: null,
      showModalInfoGnome: false,
    };
  }

  infoGnomeOpen = () => this.setState({ showModalInfoGnome: true });
  infoGnomeClose = () => this.setState({ showModalInfoGnome: false });

  getRows = () => {
    return Selectors && Selectors.getRows(this.state);
  };

  getSize = () => {
    return this.getRows().length;
  };

  rowGetter = (rowIdx) => {
    const rows = this.getRows();
    return rows[rowIdx];
  };

  onRowClick = (rowIdx, row) => {
    this.setState({ row: row });
    debugger;
    this.infoGnomeOpen();
  };

  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  };

  onClearFilters = () => {
    this.setState({ filters: {} });
  };

  render() {
    debugger
    return (
      <React.Fragment>
        {(this.state.showModalInfoGnome) &&
          <InfoGnome
            showModal={this.state.showModalInfoGnome}
            popUpHide={this.infoGnomeClose}
            rowData={this.state.row} />}
        <ReactDataGrid
          headerRowHeight={40}
          onGridSort={this.handleGridSort}
          enableCellSelect={true}
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this.getSize()}
          rowHeight={60}
          minHeight={380}
          toolbar={<Toolbar enableFilter={true} />}
          onRowClick={this.onRowClick}
          onAddFilter={this.handleFilterChange}
          onClearFilters={this.onClearFilters} />
      </React.Fragment>
    );
  }
}

FilterGrid.propTypes = {
  brastlewark: PropTypes.array
};

export default FilterGrid;