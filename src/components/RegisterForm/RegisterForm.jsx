import { RiLockPasswordFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";
import { RiLoginCircleFill } from "react-icons/ri";

import fields from "./fields";

import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <form className={css.form}>
      <div className={css.textFieldWrap}>
        <label htmlFor="email" className={css.label}>
          email
        </label>
        <div className={css.inputIconWrap}>
          <input {...fields.login} className={css.input} />
          <RiUser3Fill className={`commonIcon ${css.icon}`} />
        </div>
      </div>

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

export default RegisterForm;
