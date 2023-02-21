import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        marginBottom: theme.spacing(2),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3, 0, 2),
    },
}));

function LoginForm() {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className={clsx(classes.root)}>
            <Paper className={clsx(classes.paper)}>
                <LockOutlined className={clsx(classes.icon)} color='primary' fontSize='large' />
                <Typography variant='h5' gutterBottom>Login</Typography>
                <form className={clsx(classes.form)} onSubmit={handleSubmit(onSubmit)}>
                  <TextField 
                    variant='outlined' 
                    margin='normal' 
                    fullWidth
                    label='Username' 
                    {...register('username', { required: true })} 
                    error={Boolean(errors.username)}
                    helperText={errors.username && 'Username is required'}
                  />
                  <TextField
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    label='Password'
                    type='password'
                    {...register('password', { required: true })}
                    error={Boolean(errors.password)}
                    helperText={errors.password && 'Password is required'}
                  />
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={clsx(classes.submit)}
                  >
                    Login
                  </Button>  
                </form>
            </Paper>
        </div>
    );
}

export default LoginForm;
