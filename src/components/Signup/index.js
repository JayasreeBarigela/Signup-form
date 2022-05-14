import Form from '../Form'

import './index.css'

const Signup = () => (
  <>
    <div className="signup">
      <div className="signup__left">
        <img
          src="https://res.cloudinary.com/dxd0etrag/image/upload/v1652445125/image2_pltxih.png"
          alt=""
        />
      </div>
      <div className="signup__right">
        <div className="signup--form">
          <Form />
        </div>
      </div>
    </div>
  </>
)

export default Signup
