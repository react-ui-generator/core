import React from "react";

import {
  FieldRenderer,
  FieldRendererProps,
  basePropTypes
} from '../../interfaces';


export class FieldEditor extends FieldRenderer {
  static propTypes = {
    ...basePropTypes(),
  }

  static defaultProps = {
    className: '',
    disabled: false,
    config: {
      color: 'default',
      size: 'default',
      outline: false
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <span>test</span>
        {children}
      </div>
    );
  }
}

export function FieldEditorHOC(Component: typeof FieldRenderer) {
  return (props: FieldRendererProps): JSX.Element => (
    <FieldEditor {...props}>
      <Component {...props} />
    </FieldEditor>
  )
} 
