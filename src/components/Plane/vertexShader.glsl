varying vec2 vUv;
varying float vZ;
uniform float u_time;
precision lowp float;

const float PI = 3.1415926535;
const float RRT2O2 = 0.70710678118; // sqrt(2) / 2

float getNormalizedDistance(vec2 uv, float distance) {
  float normalized_distance = (cos(distance / RRT2O2 * PI ) + 1.0) / 2.0;
  return normalized_distance;
}


void main() {
  vUv = uv;

  float t = u_time * 0.2;
  vec3 positionModified = position;

  vec2 center = vec2(0.5, 0.5);
  float distance = distance(center, uv);

  float normalized_distance = getNormalizedDistance(uv, distance);
  positionModified.z += sin((normalized_distance * .6 + t) * 6.0) * .2 * normalized_distance * smoothstep(0.0, 1.0, u_time / 5.0) * .5;
  vZ = positionModified.z;
  
  vec4 modelPosition = modelMatrix * vec4(positionModified, 1.0);

  vec4 viewPosition = viewMatrix  * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}