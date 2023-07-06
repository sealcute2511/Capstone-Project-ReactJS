export const Stack = ({ children, flexWrap = 'no-wrap' }) => {
  return (
    <div style={{ display: 'flex', flexWrap }}>
      {children}
    </div>
  );
}
