import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { LoginRequisition } from "../../../requests";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../helper";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    "& label.Mui-focused": {
      color: "#9E5642",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#9E5642",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#9E5642",
      },
      "&:hover fieldset": {
        borderColor: "#9E5642",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9E5642",
      },
    },
  },
  input: {
    backgroundColor: "white",
    marginBottom: "2vh",
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#9E5642",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#9E5642",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9E5642",
      },
    },
  },
})(TextField);

const LoginForm = () => {
  const classes = useStyles();
  const [erro, setErro] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const history = useHistory();

  const error = {
    messageError: erro,
  };

  const handleLogin = (data) => {
    LoginRequisition(data, history, setErro);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className={classes.form}>
      <CssTextField
        required
        label="Email"
        className={classes.input}
        name="email"
        inputRef={register}
        error={!!errors.email}
        margin="dense"
      />
      <CssTextField
        required
        label="Senha"
        className={classes.input}
        name="password"
        type="password"
        inputRef={register}
        error={!!errors.password}
        margin="dense"
      />
      <p style={{ fontSize: "x-small", color: "red", alignSelf: "center" }}>
        {errors.email?.message || errors.password?.message}
      </p>
      <div style={{ textAlign: "center", color: "#ad3e3e" }}>
        {error.messageError && <p>{error.messageError}</p>}
      </div>
      <button type="submit" style={{ textTransform: "uppercase" }}>
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
