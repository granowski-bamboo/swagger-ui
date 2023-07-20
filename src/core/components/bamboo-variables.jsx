/**
 * @prettier
 */
import React from "react"

class BambooVariables extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={"bamboo variables"}>
        <div>
          <h3>Bamboo Variables</h3>
          <p>Here you can define variables that will get used in the request and response interceptors.</p>
        </div>
        <div>
          <div>PMP Private Key</div>
          <div>Note: this needs to be in PKCS #8 format, the code snippet below can be used to transform a PKCS #1 into PKCS #8</div>
          <code>openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in &lt;PEM-FILE-INPUT&gt; -out &lt;PEM-FILE-OUTPUT&gt;</code>
        </div>
        <input type="text" id="bamboo-pmp-private-pem" />
      </div>
    );
  }
}

export default BambooVariables;
