import styles from './Button.module.css';
export default function Button({color}) {
  if (color == 'white') {
    return <>
    <a href="#" className= {`btn ${styles.btn}`}>Get Started&#8594;</a>
  </>;
  } else if(color == 'blue'){
    return <>
    <a href="#" className= {`btn ${styles.blue}`}>Get Started&#8594;</a>
  </>;
  }
 
}