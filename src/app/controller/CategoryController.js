const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async show(request, response) {
    const { id } = request.params;

    const categorie = await CategoriesRepository.findById(id);

    if (!categorie) {
      return response.status(404).json({ error: 'Categorie not found' });
    }

    response.json(categorie);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categorieExits = await CategoriesRepository.findById(id);

    if (!categorieExits) {
      return response.status(404).json({ erro: 'Categorie not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categorie = await CategoriesRepository.update(id, { name });

    response.json(categorie);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
