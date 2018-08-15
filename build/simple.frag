#version 330 core

uniform vec3 objectColor;
uniform vec3 lightColor;

out vec4 outColor;

void main()
{
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength * vec3(1.0, 1.0, 1.0);

    vec3 result = ambient * objectColor;
    outColor = vec4(result, 1.0);
}
