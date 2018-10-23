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

  render() {
    const { showModal, popUpHide, rowData } = this.props;
    debugger;
    if (!rowData) return null;
    return (
      <div className="modal">
        <Modal show={showModal} onHide={popUpHide}>
          <Modal.Body>
            <div className="modal-body">
              <div className="modal-image">
                <Image src={rowData.thumbnail} responsive />;
            </div>
              <h2>{rowData.name}</h2>
              <div className="modal-main">
                <strong>ID: </strong>{rowData.id}
                <strong>AGE: </strong>{rowData.age}
                <strong>WEIGHT: </strong>{rowData.weight}
                <strong>HEIGHT: </strong>{rowData.height}
                <strong>HAIR: </strong>{rowData.hair_color}
                <strong>PROFESSIONS: </strong>{rowData.professions}
                <strong>FRIENDS:</strong>{rowData.friends}
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
