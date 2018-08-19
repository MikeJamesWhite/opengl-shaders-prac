#version 330 core

in vec3 position;
in vec3 normal;
in vec2 textureCoord;

uniform mat4 projectionMatrix;
uniform mat4 viewingMatrix;
uniform mat4 modelMatrix;

uniform vec3 light1Pos;
uniform vec3 light2Pos;

out vec3 FragPos;  
out vec3 Normal;
out vec2 TextureCoord;
out vec3 Light1Pos;
out vec3 Light2Pos;

void main()
{
    gl_Position = projectionMatrix*viewingMatrix*modelMatrix*vec4(position,1.0f);

    FragPos = vec3(viewingMatrix * modelMatrix * vec4(position, 1.0));
    Normal = mat3(transpose(inverse(viewingMatrix * modelMatrix))) * normal;
    TextureCoord = textureCoord;
    Light1Pos = vec3(viewingMatrix * vec4(light1Pos, 1.0));
    Light2Pos = vec3(viewingMatrix * vec4(light2Pos, 1.0));
}
