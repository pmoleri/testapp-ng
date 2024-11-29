import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';

export default function MasterView() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout master-view-container")}></div>
    </>
  );
}
