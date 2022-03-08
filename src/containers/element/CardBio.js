import React, {Fragment} from 'react';

function CardBio(props) {
  return (
      <Fragment>
          <div style={{height:50}}></div>
          <div className="card">
            <div className="row" style={{marginLeft:20,marginRight:20}}>
              <img className="avatar" src={process.env.PUBLIC_URL + '/assets/img/bio.jpg'} />
            </div>
            <div className="row">
                <h3 className="font-1" style={{color:'#1b1e17',fontSize:30}}>Penulis</h3>
                <p style={{color:'#1b1e17'}}>Sudah genap delapan tahun terjun dan bergelut di dunia software engginering. berkerja di salah satu perusahaan webhosting
                    nomor 1 di indonesia. berfokus pada riset dan pengembangan pada perusahaan tersebut. sering mencoba hal hal baru
                    yang berkaitan dengan teknologi.
                </p>
            </div>
          </div>
      </Fragment>
  )
}

export default CardBio;
