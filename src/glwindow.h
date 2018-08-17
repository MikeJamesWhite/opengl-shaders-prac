#ifndef GL_WINDOW_H
#define GL_WINDOW_H

#include <GL/glew.h>

#include <glm/vec3.hpp>
#include <glm/mat4x4.hpp>

#include "geometry.h"
#include "entity.h"
#include "light.h"

class OpenGLWindow
{
public:
    OpenGLWindow();

    void initGL();
    void render();
    bool handleEvent(SDL_Event e);
    void cleanup();

private:
    SDL_Window* sdlWin;
    
    GLuint vao;
    GLuint shader;
    GLuint vertexBuffer;
    GLuint normBuffer;

    Entity parentEntity;
    Entity childEntity;
    Entity cameraEntity;
    Light light1;
    Light light2;

    GeometryData geometry;

    glm::mat4 viewingMat;

    int colorIndex;
    int translateDirection;
    int rotateDirection;
    int scaleDirection;
    double frameCounter = 0;
};

#endif
