import ProgressBar from './multiStepForm/index';
import progessBarConfig from './progressBarConfig';

function App() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <ProgressBar
        progessBarConfig={progessBarConfig}
        active={2}
        totalStep={3}
      />
    </div>
  );
}

export default App;
