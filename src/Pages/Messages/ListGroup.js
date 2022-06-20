import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const ListGroupMessages = () => {
    return (
        <ListGroup className='listGroupMessages'>
            <ListGroup.Item action href='#writeMessageLink'
                as="WriteMessageLink"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Write Message</div>

                </div>
                {/* <Badge bg="primary" pill>
                    14
                </Badge> */}
            </ListGroup.Item>

            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div onClick={() => this.handleViewReceivedMessages()}
                        className="fw-bold">Received</div>


                </div>
                {/* <Badge bg="primary" pill>
                    14
                </Badge> */}
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Sent</div>

                </div>
                {/* <Badge bg="primary" pill>
                    14
                </Badge> */}
            </ListGroup.Item>
        </ListGroup>
    );
}

export default ListGroupMessages;
