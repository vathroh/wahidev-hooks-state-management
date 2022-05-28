import React, { useEffect } from 'react'
import { useAppState } from '../../contexts/appState'
import { deleteKontak, detailKontak, getKontakList } from '../../actions/kotakAction'


function ListKontak() {
  const [state, dispatch] = useAppState();
  const { getKontakResult, getKontakLoading, getKontakError, deleteKontakResult } = state

  useEffect(()=>{
    getKontakList(dispatch);
  }, [dispatch])
  
  useEffect( () => {
    if(deleteKontakResult){
      getKontakList(dispatch);
    }
  }, [dispatch, deleteKontakResult])

  return (
    <div>ListKontak
    { getKontakResult ? (
      getKontakResult.map((kontak)=> {
        return (
          <p key={kontak.id}>
            {kontak.nama} - {kontak.nohp} - 
            <button onClick={ () => detailKontak(dispatch, kontak)}>Edit</button>
            <button onClick={ () => deleteKontak(dispatch, kontak.id)}>Delete</button>
          </p>
        )
      })
    ) : getKontakLoading ? (
      <p>Loading ...</p>
    ) : (
      <p>{getKontakError ? getKontakError : "Data Kosong"}</p>
    )}
    </div>
  )
}

export default ListKontak