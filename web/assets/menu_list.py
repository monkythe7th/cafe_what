import json, os

def menu_list():
    menu = open('/Users/naleli/Documents/projects/cafe_what/web/assets/menu_list.json', 'w')
    path = "/Users/naleli/Documents/projects/cafe_what/web/assets/imgs/menu_images"
    files = os.listdir(path)
    files.sort()
    menus = json.dumps(files)
    menu.write(menus)
    print(files)

if __name__ == '__main__':
    menu_list()
