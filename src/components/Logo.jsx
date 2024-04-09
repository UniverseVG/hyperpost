/* eslint-disable react/prop-types */

function Logo({ width = "400px", src }) {
  return <img src={src || "/logo.png"} width={width} alt="logo" />;
}

export default Logo;
