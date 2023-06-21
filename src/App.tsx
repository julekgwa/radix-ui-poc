import { CheckIcon } from '@radix-ui/react-icons';
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Input,
  Logo,
  Panel,
  Switch,
  Tabs,
  Text,
} from 'common';

function App() {
  return (
    <Col>
      <div className='flex mt-7 mb-10 flex-col justify-center items-center'>
        <Logo />
      </div>
      <Tabs tabs={['Login', 'Signup']}>
        <Panel name='Login'>
          <div className='flex flex-1 justify-center'>
            <div className='w-80'>
              <Text className='text-center mt-16'>Join Us</Text>
              <div className='my-10 flex flex-wrap gap-5'>
                <Input type={'text'} fullWidth placeholder='Username' />
                <Input type={'password'} fullWidth placeholder='Password' />
              </div>

              <div className='flex flex-1 justify-between'>
                <Switch
                  label='Remember me?'
                  labelClass={'text-xs ml-3 uppercase font-bold'}
                />
                <Button variant={'solid'} modifier={'round'}>
                  <CheckIcon />
                </Button>
              </div>

              <div className='my-10 flex flex-1 flex-wrap gap-2'>
                <Button variant={'solid'} fullWidth label='Login with Google' />
                <Button
                  variant={'solid'}
                  fullWidth
                  label='Login with Facebook'
                />
              </div>
            </div>
          </div>
          <Divider />

          <Text
            className={
              'text-xs mt-4 text-center text-light-grey font-bold uppercase tracking-wide'
            }
          >
            new user?{' '}
            <span
              className={
                'underline underline-offset-4 text-white cursor-pointer'
              }
            >
              sign up
            </span>
          </Text>
        </Panel>
        <Panel name='Signup'>
          <div className='flex flex-1 justify-center'>
            <div className='w-80'>
              <Text className='text-center mt-16'>Join Us</Text>
              <div className='my-10 flex flex-wrap gap-5'>
                <Input type={'text'} fullWidth placeholder='Username' />
                <Input type={'password'} fullWidth placeholder='Password' />
                <Input type={'text'} fullWidth placeholder='Repeat Password' />
                <Input type={'password'} fullWidth placeholder='Email Address' />
              </div>

              <div className='flex mb-14 flex-1 justify-between'>
                <Checkbox label='AGREED to TERMS?' />
                <Button variant={'solid'} modifier={'round'}>
                  <CheckIcon />
                </Button>
              </div>
            </div>
          </div>
          <Divider />

          <Text
            className={
              'text-xs mt-4 text-center text-light-grey font-bold uppercase tracking-wide'
            }
          >
            Already did this?{' '}
            <span
              className={
                'underline underline-offset-4 text-white cursor-pointer'
              }
            >
              login
            </span>
          </Text>
        </Panel>
      </Tabs>
    </Col>
  );
}

export default App;
