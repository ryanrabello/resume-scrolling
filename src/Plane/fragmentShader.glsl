varying vec2 vUv;
varying float vZ;
uniform float u_time;
uniform float u_scroll;
precision lowp float;

const float animationWait = 10.0;

vec3 colorA = vec3(0.792, 0.663, 0.780);
vec3 colorB = vec3(0.333, 0.384, 0.796);

void main() {

    vec2 center = vec2(0.5, 0.5);
    float distance = clamp((0.5 - distance(center, vUv)) * 2.0, 0.0, 1.0);

    vec3 mixColor = mix(colorA, colorB, vZ);

    if((fract(vUv.x * 20.0) < 0.04) || (fract(vUv.y * 20.0) < 0.04) || (vUv.x > 1.0 - 0.002) || (vUv.y > 1.0 - .002)) {
        float animationAmount = clamp((u_time / (animationWait)), 0.0, 1.0);
        vec4 animatedColor = mix(vec4(0.0), vec4(.94), distance * animationAmount);

        gl_FragColor = animatedColor;
    } else {
        gl_FragColor = vec4(0.0);
    }
}