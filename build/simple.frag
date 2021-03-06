#version 330 core

in vec3 Normal;
in vec3 FragPos;
in vec2 TextureCoord;
in vec3 Light1Pos;
in vec3 Light2Pos;

uniform sampler2D objectTexture;
uniform vec3 objectColor;
uniform vec3 light1Color;
uniform vec3 light2Color;

out vec4 outColor;

void main()
{
    // attributes
    float ambientStrength = 0.1;
    float specularStrength = 0.5;

    // ambient lighting
    vec3 ambient = ambientStrength * (light1Color+light2Color);

    // diffuse lighting
    vec3 norm = normalize(Normal);

    // light1 diffuse
    vec3 light1Dir = normalize(Light1Pos - FragPos); 
    float diff1 = max(dot(norm, light1Dir), 0.0);

    // light2 diffuse
    vec3 light2Dir = normalize(Light2Pos - FragPos); 
    float diff2 = max(dot(norm, light2Dir), 0.0);

    vec3 diffuse = (diff1 * light1Color) + (diff2 * light2Color); // combine diffuse lighting

    // specular lighting
    vec3 viewDir = normalize(-FragPos);

    // light1 specular
    vec3 reflectDir1 = reflect(-light1Dir, norm);  
    float spec1 = pow(max(dot(viewDir, reflectDir1), 0.0), 32);

    // light2 specular
    vec3 reflectDir2 = reflect(-light2Dir, norm);  
    float spec2 = pow(max(dot(viewDir, reflectDir2), 0.0), 32);

    vec3 specular = specularStrength * ((spec1 * light1Color) + (spec2 * light2Color));  

    // apply lighting
    vec3 result = (ambient + diffuse + specular) * objectColor;
    outColor = texture(objectTexture, TextureCoord) * vec4(result, 1.0);
}
