function Contact() {
  return (
    <div>
      <div class="contact">
        <h2>Contact Us</h2>
        <dl>
          <dt>ADDRESS:</dt>
          <dd> Suit C1, Choice Plaza,Opp Glo Office Challenge,Ibadan.</dd>

          <dt>MOBILE NO:</dt>
          <dd> 08149937050</dd>
          <dd> 09065575816</dd>
          <dd> 07054105255</dd>

          <dt>WEB SITE:</dt>
          <dd> www.e-techict.com</dd>
          <dd>support@e-techict.com</dd>
        </dl>

        <form action="" method="post">
          <p>Send Us A Message :</p>
          <textarea rows="15" cols="50"></textarea>
          <div class="Send">
            <p>
              {" "}
              <input type="submit" name="submit" value="Send" />{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
