//// components/ActionButton.jsx

// 🔽 propsを追加
export const ActionButton = ({ text, action }) => {
  return (
    <>
    <button type="button" onClick={action}>{text}</button>
    </>
  );
};


  
  
  