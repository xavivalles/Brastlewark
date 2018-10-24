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
      return <div>{objStrings[key]}</div>
    });
    return printedStrings;
  }

  render() {
    const { showModal, popUpHide, rowData } = this.props;
    if (!rowData) return null;
    return (
      <div className="modal">
        <Modal show={showModal} onHide={popUpHide}>
          <Modal.Body>
            <div className="modal-full">
              <div className="modal-body">
                <div className="modal-image">
                  <Image src={rowData.thumbnail} responsive />;
                </div>
                <div className="modal-main">
                  <div className="two-elements-row"> <h2>{rowData.name}</h2> </div>
                  <div className="three-elements-row">
                    <div className="same-column"><strong>ID: </strong>{rowData.id}</div>
                    <div className="same-column"><strong>AGE: </strong>{rowData.age}</div>
                    <div className="same-column"><strong>HAIR: </strong>{rowData.hair_color}</div>
                  </div>
                  <div className="two-elements-row">
                    <div className="same-column"> <strong>WEIGHT: </strong>{rowData.weight} </div>
                    <div className="same-column"> <strong>HEIGHT: </strong>{rowData.height}</div>
                  </div>
                  <div className="two-elements-row">
                    <div className="same-column"> <strong>PROFESSIONS: </strong>{this.printObjectStrings(rowData.professions)}</div>
                    <div className="same-column"> <strong>FRIENDS:</strong>{this.printObjectStrings(rowData.friends)}</div>
                  </div>
                </div>
              </div>
              <div className="modal-button">
                <button onClick={this.cancel}>BACK</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

InfoGnome.propTypes = {
  showModal: PropTypes.bool,
  popUpHide: PropTypes.func,
  rowData: PropTypes.object,
};

export default InfoGnome;
