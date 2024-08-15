import React from "react";
import img from "./img/1.png";
import Footer from "../Footer";

export default function About() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero">
          <img
            className="hero-img"
            src="https://s3-alpha-sig.figma.com/img/bde2/f2ac/84af301f802bcb9672795b54ce800fb0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UrzTaay7zv5mj4cO-XesHCQFHO4kmA-5zuGiUgw1V5fyIcJjQAVscog96gV9Z5PqnAbJwhxXHp5N6vzLaYmbSwcF1J~bxXTUN2TzZr1bxFTyZhK5Dckibb0Ql1fHCjeCWgEBZB3ZkXYFkZCbEfqPopFnRZxSg5P2WGWsaqVzjNEXxTUrB3arz-lWsmB-AxQVfWWrscv3InsT4MnZzp98VvvUu9uCcS8pmqUSO9qzTeGKY4Qk0abXI4fLz72hG8K5E168EArrbEuZHECUrADTmTeFImS5z5t-nkzcZGxLDSQgJFAd1vPcHQh8GfTgIKtuaDORXUneRDDHxRKq-IA2aQ__"
            alt=""
          />
          <p className="hero-text">About Northstar</p>
        </div>
      </header>

      <section className="product-section">
        <div className="product">
          <img
            className="product-img"
            src="https://s3-alpha-sig.figma.com/img/9d68/3456/d8ed0f8b4fb461f2e62bbc0298d1f3d1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcTxJS7VYOiilSxl5CYTZ35UrIpAt6OUXxYHPCQdXGrlNzJ0r29SKvjCpf788i7WB34Bt30MwfBvlsVFgZDdk0mjxDJS5FSUo3FphQ6cp4wZQbsOYC8EL9MJJzzDIJPKNjJnkzVCbHsNgoj4qM8khGx~Ptbu9dbGuNpicM8dTgPakbB~riNADBmQtVSyHXY7os2c7n0ePsivNj0UunN~6IPQkRxTFVGuL8Up6dfITpKuxPixPQ5VTGN6DDbj15b9~nnTQSrTbLOs626ZOXDLc4UNLOcDbu0vQ90~HLzFrdH0MoTKQIw75xFcuudOjja-Ihr01wvakT191j3TKShEeg__"
            alt="Model 1"
          />
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="buy-now">BUY NOW</button>
        </div>
        <div className="product highlighted">
          <img
            className="product-img"
            src="https://s3-alpha-sig.figma.com/img/e2af/3710/982dac10d6b2a616e92ba5b112180e1b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ayInS1tGMn3DkXE2jEaiio0Flfi1M-~oirVmUGj6wyYy3BYDT~lEQebjmH6ME34SPRGSeUu3yzNsH7m9C~olYnCoeKlISWLqkVYzg0pAbRE~e5YwXTjzsgzrwKdd1U-R2VIM3GlCFA0PJ2380cg1AFgJySreDId8OBils3qO8qF4hLuy7ZNBYq7HgwqrrCmc~ne~8Qea5bgJkuRTQcXUA5L9VdA7WN7PV9CXpVvE73IpKcJcsV9fIknRuT3mErbz39SkjdsGXtjpm3Hzo1G96NcXsLStyU89Dk5q9QtgnlSk1YN3kRRSE3OVbKcRPLcPODiQNeXx2lGG3qBLgO8hbQ__"
            alt="Model 2"
          />
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="buy-now">BUY NOW</button>
        </div>
      </section>

      <section className="founders">
        <h2>The Founders</h2>
        <div className="founders-list">
          <div className="founder">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2af/3710/982dac10d6b2a616e92ba5b112180e1b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ayInS1tGMn3DkXE2jEaiio0Flfi1M-~oirVmUGj6wyYy3BYDT~lEQebjmH6ME34SPRGSeUu3yzNsH7m9C~olYnCoeKlISWLqkVYzg0pAbRE~e5YwXTjzsgzrwKdd1U-R2VIM3GlCFA0PJ2380cg1AFgJySreDId8OBils3qO8qF4hLuy7ZNBYq7HgwqrrCmc~ne~8Qea5bgJkuRTQcXUA5L9VdA7WN7PV9CXpVvE73IpKcJcsV9fIknRuT3mErbz39SkjdsGXtjpm3Hzo1G96NcXsLStyU89Dk5q9QtgnlSk1YN3kRRSE3OVbKcRPLcPODiQNeXx2lGG3qBLgO8hbQ__"
              alt="HM Jawad"
            />
            <p>HM Jawad</p>
          </div>
          <div className="founder">
            <img src={img} alt="Furqan Abid" />
            <p>Furqan Abid</p>
          </div>
          <div className="founder">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2af/3710/982dac10d6b2a616e92ba5b112180e1b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ayInS1tGMn3DkXE2jEaiio0Flfi1M-~oirVmUGj6wyYy3BYDT~lEQebjmH6ME34SPRGSeUu3yzNsH7m9C~olYnCoeKlISWLqkVYzg0pAbRE~e5YwXTjzsgzrwKdd1U-R2VIM3GlCFA0PJ2380cg1AFgJySreDId8OBils3qO8qF4hLuy7ZNBYq7HgwqrrCmc~ne~8Qea5bgJkuRTQcXUA5L9VdA7WN7PV9CXpVvE73IpKcJcsV9fIknRuT3mErbz39SkjdsGXtjpm3Hzo1G96NcXsLStyU89Dk5q9QtgnlSk1YN3kRRSE3OVbKcRPLcPODiQNeXx2lGG3qBLgO8hbQ__"
              alt="Abdullah Ah"
            />
            <p>Abdullah Ah</p>
          </div>
          <div className="founder">
            <img
              src="https://s3-alpha-sig.figma.com/img/e2af/3710/982dac10d6b2a616e92ba5b112180e1b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ayInS1tGMn3DkXE2jEaiio0Flfi1M-~oirVmUGj6wyYy3BYDT~lEQebjmH6ME34SPRGSeUu3yzNsH7m9C~olYnCoeKlISWLqkVYzg0pAbRE~e5YwXTjzsgzrwKdd1U-R2VIM3GlCFA0PJ2380cg1AFgJySreDId8OBils3qO8qF4hLuy7ZNBYq7HgwqrrCmc~ne~8Qea5bgJkuRTQcXUA5L9VdA7WN7PV9CXpVvE73IpKcJcsV9fIknRuT3mErbz39SkjdsGXtjpm3Hzo1G96NcXsLStyU89Dk5q9QtgnlSk1YN3kRRSE3OVbKcRPLcPODiQNeXx2lGG3qBLgO8hbQ__"
              alt="Abrar Khan"
            />
            <p>Abrar Khan</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <img
            src="https://s3-alpha-sig.figma.com/img/9d68/3456/d8ed0f8b4fb461f2e62bbc0298d1f3d1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcTxJS7VYOiilSxl5CYTZ35UrIpAt6OUXxYHPCQdXGrlNzJ0r29SKvjCpf788i7WB34Bt30MwfBvlsVFgZDdk0mjxDJS5FSUo3FphQ6cp4wZQbsOYC8EL9MJJzzDIJPKNjJnkzVCbHsNgoj4qM8khGx~Ptbu9dbGuNpicM8dTgPakbB~riNADBmQtVSyHXY7os2c7n0ePsivNj0UunN~6IPQkRxTFVGuL8Up6dfITpKuxPixPQ5VTGN6DDbj15b9~nnTQSrTbLOs626ZOXDLc4UNLOcDbu0vQ90~HLzFrdH0MoTKQIw75xFcuudOjja-Ihr01wvakT191j3TKShEeg__"
            alt="Stacy"
          />
          <div className="testimonial-text">
            <blockquote>
              Once we ordered some accessories items and we got the products
              delivered in our doorstep, the customer support was super helpful
              and they answered all my queries.
            </blockquote>
            <p>Stacy</p>
          </div>
        </div>
        <div className="testimonial">
          <img
            src="https://s3-alpha-sig.figma.com/img/9d68/3456/d8ed0f8b4fb461f2e62bbc0298d1f3d1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcTxJS7VYOiilSxl5CYTZ35UrIpAt6OUXxYHPCQdXGrlNzJ0r29SKvjCpf788i7WB34Bt30MwfBvlsVFgZDdk0mjxDJS5FSUo3FphQ6cp4wZQbsOYC8EL9MJJzzDIJPKNjJnkzVCbHsNgoj4qM8khGx~Ptbu9dbGuNpicM8dTgPakbB~riNADBmQtVSyHXY7os2c7n0ePsivNj0UunN~6IPQkRxTFVGuL8Up6dfITpKuxPixPQ5VTGN6DDbj15b9~nnTQSrTbLOs626ZOXDLc4UNLOcDbu0vQ90~HLzFrdH0MoTKQIw75xFcuudOjja-Ihr01wvakT191j3TKShEeg__"
            alt="Tiffany"
          />
          <div className="testimonial-text">
            <blockquote>
              I ordered 5 shirts from them and received them in no time. The
              customer support was awesome!
            </blockquote>
            <p>Tiffany</p>
          </div>
        </div>
        <div className="testimonial">
          <img
            src="https://s3-alpha-sig.figma.com/img/9d68/3456/d8ed0f8b4fb461f2e62bbc0298d1f3d1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcTxJS7VYOiilSxl5CYTZ35UrIpAt6OUXxYHPCQdXGrlNzJ0r29SKvjCpf788i7WB34Bt30MwfBvlsVFgZDdk0mjxDJS5FSUo3FphQ6cp4wZQbsOYC8EL9MJJzzDIJPKNjJnkzVCbHsNgoj4qM8khGx~Ptbu9dbGuNpicM8dTgPakbB~riNADBmQtVSyHXY7os2c7n0ePsivNj0UunN~6IPQkRxTFVGuL8Up6dfITpKuxPixPQ5VTGN6DDbj15b9~nnTQSrTbLOs626ZOXDLc4UNLOcDbu0vQ90~HLzFrdH0MoTKQIw75xFcuudOjja-Ihr01wvakT191j3TKShEeg__"
            alt="James"
          />
          <div className="testimonial-text">
            <blockquote>
              I got a wrong shirt so I contacted them and they happily offered
              me a refund. I will surely shop from them again.
            </blockquote>
            <p>James</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
