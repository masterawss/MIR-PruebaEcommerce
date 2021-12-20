import '../style/Loader.css';

const Loader = function () {
  return (
    <div style={{
      textAlign: 'center',
      width: '100%',
      height: '100%',
      marginTop: '200px',
    }}
    >
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
