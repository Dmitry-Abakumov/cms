import { RiLockPasswordFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiLoginCircleFill } from "react-icons/ri";

import fields from "./fields";

import css from "./LoginFom.module.css";

const LoginForm = () => {
  return (
    <form className={css.form}>
      <div className={css.textFieldWrap}>
        <label htmlFor="email" className={css.label}>
          email
        </label>
        <div className={css.inputIconWrap}>
          <input {...fields.email} className={css.input} />
          <RiMailFill className={`commonIcon ${css.icon}`} />
        </div>
      </div>

      <div className={css.textFieldWrap}>
        <label htmlFor="password" className={css.label}>
          password
        </label>
        <div className={css.inputIconWrap}>
          <input {...fields.password} className={css.input} />
          <RiLockPasswordFill className={`commonIcon ${css.icon}`} />
        </div>
      </div>

      <button
        type="submit"
        className={css.btn}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Login
        <RiLoginCircleFill className="commonIcon" />
      </button>
    </form>
  );
};

export default LoginForm;
