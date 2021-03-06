import { loader, loaderOverlay } from '../../../helpers';

const ActionButtons = (props) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div>
      {props.loading && loaderOverlay()}
      <div className="mt-4 flex justify-end">
        {props.currentStep > 1 && (
          <button
            className="bg-orange-500 hover:bg-orange-600 text-sm text-white font-bold rounded shadow-md mr-2 px-6 py-2"
            onClick={handleBack}
          >
            Kembali
          </button>
        )}

        {props.currentStep < props.totalSteps && (
          <button
            className="bg-orange-500 hover:bg-orange-600 text-sm text-white font-bold rounded shadow-md px-6 py-2"
            onClick={handleNext}
          >
            Lanjut
          </button>
        )}
        {props.currentStep === props.totalSteps && (
          <button
            className="bg-orange-500 hover:bg-orange-600 text-sm text-white font-bold rounded shadow-md px-6 py-2"
            onClick={handleFinish}
            style={{ opacity: props.loading ? 0.6 : 1,width:'100px' }}
            disabled={props.loading}
          >
            {props.loading ? loader() : 'Selesai'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ActionButtons;
