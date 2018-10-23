import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Image } from 'react-bootstrap';

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
    return (
      <div>
        <Modal show={showModal} onHide={popUpHide}>
          <Modal.Body>
            <Image src={rowData.thumbnail} responsive circle/>;
            <h2>{rowData.name}</h2>
            <div className="modal-custom-text space-top">
              <p>You must have an approved Change Order to make this product available to customers.</p>
              <div className="space-top custom-line-height">
                <p>Please enter the Change Order number below:</p>
                <p>*Change Order number is required.</p>
              </div>
            </div>
            <div className="text-center space-top-double">
              <button className="cancel-button space-left no-save" onClick={this.cancel}>CANCEL</button>
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
