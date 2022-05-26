import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '500px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <>
                <Button variant="danger" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="md"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </>
        </div>
    );
};

export default Loading;