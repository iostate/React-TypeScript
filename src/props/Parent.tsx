import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="purple" onClick={() => console.log('Clicked')}>
    asldksa
  </ChildAsFC>
}


export default Parent;