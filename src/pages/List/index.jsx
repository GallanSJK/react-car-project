import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    fetchMobil,
    selectMobil,
    selectMobilLoading
} from './ListSlice'

export default function List() {
  const firstLoad = useRef(true)
  const mobil = useSelector(selectMobil)
  const mobilLoading = useSelector(selectMobilLoading)

  const dispatch = useDispatch();

  useEffect(() => {
    if(firstLoad.current) dispatch(fetchMobil())

    return () => {
        firstLoad.current = false
    }
  }, [])
  

  return (
    <div>
        { mobilLoading === 'loading' && <div>Loading...</div>}
        { mobil ? 
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Model</th>
                        <th>Manufactur</th>
                        <th>Foto</th>
                        <th>Harga Sewa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mobil.map((e, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{e.model}</td>
                                <td>{e.manufacture}</td>
                                <img height="50" src={"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" + e.image.substring(1)}/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        : "No Data"}
    </div>
  )
}
