import pygame

FPS = 60
name = ['PygamE', 'EmagyP', 'Privet']

pygame.init()
pygame.display.set_mode((600, 400))
clock = pygame.time.Clock()

# pygame.display.update()

while True:
	for j in name:
		clock.tick(FPS)
		pygame.display.set_caption()

	clock.tick(FPS)
	for i in pygame.event.get():
		if i.type == pygame.QUIT:
			exit()

	pygame.display.update()