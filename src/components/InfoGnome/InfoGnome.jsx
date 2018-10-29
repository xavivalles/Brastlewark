import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Image } from 'react-bootstrap';
import "./InfoGnome.css";
class InfoGnome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: '',
    };
  }

  updateOrderNumberJSON(buildRow) {
    const { popUpHide } = this.props;
    return {
      changeOrderNumber: this.state.orderNumber,
      verifiedByText: buildRow.verifiedUserName || '',
      posVersionId: this.props.posVersionId || 0,
      buildId: buildRow.id || 0,
      onSuccess: popUpHide,
      onFail: popUpHide,
    };
  }

  updateOrderNumberWithValidation = (e, orderNumber) => {
    e.preventDefault();
    this.setState({ orderNumber: e.target.validity.valid ? e.target.value : orderNumber });
  }

  cancel = (e) => {
    const { popUpHide } = this.props;
    e.preventDefault();
    popUpHide();
  }

  printObjectStrings = (objStrings) => {
    debugger
    var printedStrings = Object.keys(objStrings).map(key => {
      return <div key={key}>{objStrings[key]}</div>
    });
    return printedStrings;
  }

  render() {
    const { showModal, popUpHide, rowData } = this.props;
    if (!rowData) return null;
    return (
      <div className="modal">
        <Modal show={showModal} onHide={popUpHide}>
          <Modal.Body  bsStyle="default" style={{"background-color": rowData.hair_color}}>
            <div className="modal-full">
              <div className="modal-top">
                <div className="modal-image">
                  <Image src={rowData.thumbnail} responsive />;
                </div>
                <div className="modal-main">
                  <div className="row-title">
                    <h1>{rowData.name}</h1>
                  </div>
                  <div className="row-data">
                    <div className="column">
                      <div className="margin-bottom-title-row">
                        <strong>AGE</strong>
                        {rowData.age}
                      </div>
                      <div className="margin-bottom-title-row">
                        <strong>WEIGHT</strong>
                        {rowData.weight}
                      </div>
                      <div className="margin-bottom-title-row">
                        <strong>PROFESSIONS</strong>
                        {this.printObjectStrings(rowData.professions)}
                      </div>
                    </div>
                    <div className="column">
                      <div className="margin-bottom-title-row">
                        <strong>HAIR</strong>
                        {rowData.hair_color}
                      </div>
                      <div className="margin-bottom-title-row">
                        <strong>HEIGHT</strong>
                        {rowData.height}
                      </div>
                      <div className="margin-bottom-title-row">
                        <strong>FRIENDS</strong>
                        {this.printObjectStrings(rowData.friends)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-botom">
                <div className="modal-button">
                  <button onClick={this.cancel}><strong>R E T U R N</strong></button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div >
    );
  }
}

InfoGnome.propTypes = {
  showModal: PropTypes.bool,
  popUpHide: PropTypes.func,
  rowData: PropTypes.object,
};

export default InfoGnome;
