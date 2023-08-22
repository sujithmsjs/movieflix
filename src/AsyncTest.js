import { useState } from 'react';
import { callLateApi } from './apis/MovieService'

const AsyncTest = () => {

    const [value, setValue] = useState({ result: 'Pending...', status: 'COMPLETE' })

    const callAPI = (event) => {
        setValue((prevState) => ({ result : '', status: 'WAIT' }));
        callLateApi()
            .then(result => {
                console.info('Inside then');
                console.info(result.data);
                setValue((prevState) => ({ ...result.data, status: 'WAIT' }));
            })
            .catch(error => {
                console.info(error.data);
                setValue((prevState) => ({ result: 'Error', status: 'ERROR' }));
                console.info('Inside error');
            })
            .finally(() => {
                setValue((prevState) => ({ ...prevState, status: 'COMPLETE' }));
                console.info('Inside Finally');
            });
        console.info('After Finally');
    }

   

    return <div>
        <h3>Async Test</h3>
        <div className={`alert ${value.result === 'Success' ? 'alert-primary' :  'alert-danger'}`} role="alert">
            {value.result}

            {
                value.status !== 'COMPLETE' && <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }


        </div>
        <button onClick={callAPI} className="btn btn-outline-success">Call API</button>
    </div>
}

export default AsyncTest;