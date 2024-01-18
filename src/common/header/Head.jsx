function Head() {
  return (
    <>
      <section className="head">
        <div className="container d-flex justify-content-between">
          <div className="left d-flex">
            <i className="fa fa-phone"></i>
            <label>+90555252525</label>
            <i className="fa fa-envelope"></i>
            <label>deneme@deneme.com</label>
          </div>
          <div className="right d-flex RText">
            <label>Sıkça Sorulan Sorular</label>
            <label>Yardım</label>
            <label>TR</label>
            <label>Türkiye</label>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
