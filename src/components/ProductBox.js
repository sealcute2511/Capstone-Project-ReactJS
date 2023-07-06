import { Stack } from "./UI"

export const ProductBox = ({ product }) => {
  return (
    <div style={{
      backgroundColor: '#F8F8F8',
      display: 'inline-block',
      margin: '30px',
      flex: '0 0 calc(33.333333% - 60px)'
    }}>
      <div style={{ width: '250px', margin: 'auto' }}>
        <img src={product.image} alt="Preview" style={{ width: '100%' }} />
      </div>
      <div style={{ padding: '0 15px' }}>
        <h6>{product.name}</h6>
        <p style={{ color: '#CBC9C9' }}>{product.shortDescription}</p>
      </div>
      <Stack>
        <div style={{ width: '50%' }}>
          <button style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#E1B067',
            border: 'none',
            outline: 'none',
          }}>
            Buy now
          </button>
        </div>
        <div style={{
          width: '50%',
          backgroundColor: '#DEDDDC',
          fontWeight: '700',
          display: 'flex',
          justifySelf: 'center',
          alignItems: 'center',
        }}>
          <p style={{
            margin: 0,
            padding: '18px',
            width: '100%',
            textAlign: 'center'
          }}>
            ${product.price}
          </p>
        </div>
      </Stack>
    </div >
  );
}
