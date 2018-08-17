#version 330 core

in vec3 position;
in vec3 normal;

uniform mat4 projectionMatrix;
uniform mat4 viewingMatrix;
uniform mat4 modelMatrix;

out vec3 FragPos;  
out vec3 Normal;

void main()
{
    gl_Position = projectionMatrix*viewingMatrix*modelMatrix*vec4(position,1.0f);

    FragPos = vec3(modelMatrix * vec4(position, 1.0));
    Normal = normal;
}
