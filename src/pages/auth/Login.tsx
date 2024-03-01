import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/states/auth/hook';
import { authValidateSchema } from 'src/types/user';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginPage = () => {
  const {
    state: { loading, isAuth },
    // login
  } = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authValidateSchema),
  });

  const handleLogin = async () => {
    console.log(getValues());

    // if (!validResult.success) {
    //   console.log(validResult.error.issues);
    // }
    // try {
    //   await login(bodyReq);
    // } catch (error) {}
  };

  return isAuth ? (
    <Navigate to="/home" replace={true} />
  ) : (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Box height="100vh">
        <Box
          sx={{
            width: '400px',
            textAlign: 'center',
            position: 'relative',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography variant="h3">Login</Typography>
          <Box>
            <TextField
              placeholder="Pls enter email"
              size="small"
              fullWidth
              {...register('username')}
            />
            {errors.username?.message && (
              <Typography variant="small" color="red" display="flex" justifyContent="flex-end">
                {errors.username.message.toString()}
              </Typography>
            )}
          </Box>
          <Box>
            <TextField
              placeholder="Pls enter password"
              size="small"
              type="password"
              fullWidth
              {...register('password')}
            />
            {errors.password?.message && (
              <Typography variant="small" color="red" display="flex" justifyContent="flex-end">
                {errors.password.message.toString()}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{
                color: 'gray',
              }}
            />
            <Typography>Forgot ?</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: '40px',
            }}
            type="submit"
          >
            Login{loading ? '...' : ''}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default LoginPage;
