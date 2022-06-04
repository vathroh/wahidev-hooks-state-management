import React, { useEffect, useState } from 'react'
import { useAppState } from '../../contexts/appState'
import { addKontak, getKontakList, updateKontak } from '../../actions/kotakAction';

function FormKontak() {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");
    const [id, setId] = useState("");
    const [state, dispatch] = useAppState();
    const { addKontakResult, detailKontakResult, updateKontakResult } = state;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (id) {
            updateKontak(dispatch, { id: id, nama: nama, nohp: nohp })
        } else {
            addKontak(dispatch, { nama: nama, nohp: nohp })
        }
    }

    useEffect(() => {
        if (addKontakResult) {
            getKontakList(dispatch);
            setNama('');
            setNohp('');
        }
    }, [addKontakResult, dispatch]);

    useEffect(() => {
        if (detailKontakResult) {
            setNama(detailKontakResult.nama)
            setNohp(detailKontakResult.nohp)
            setId(detailKontakResult.id)
        }
    }, [detailKontakResult])

    useEffect(() => {
        if (updateKontakResult) {
            getKontakList(dispatch);
            setNama('');
            setNohp('');
        }
    }, [updateKontakResult, dispatch]);

    return (
        <div>
            <h3>FormKontak</h3>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name="nama" placeholder="Nama . . . " value={nama} onChange={(event) => setNama(event.target.value)} />
                <input type="text" name="nohp" placeholder="NO HP . . . " value={nohp} onChange={(event) => setNohp(event.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormKontak