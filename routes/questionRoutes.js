// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const SurveyQuestion = require('../models/SurveyQuestion');

// Créer une nouvelle question pour un sondage
router.post('/questions', async (req, res) => {
  try {
    // Extraire 'surveyId' et 'questionText' du corps de la requête (données reçues)
    const { surveyId, questionText } = req.body;

    // Créer une nouvelle instance du modèle 'SurveyQuestion' avec les données extraites
    const question = new SurveyQuestion({ surveyId, questionText });

    // Enregistrer le nouveau document (question) dans la collection MongoDB
    await question.save();

    // Répondre avec la question créée au format JSON et le code HTTP 201 (Créé)
    res.status(201).json(question);
  } catch (error) {
    // Si une erreur se produit lors du processus, répondre avec un message d'erreur et le code HTTP 500 (Erreur Interne du Serveur)
    res.status(500).json({ error: 'Échec de la création de la question' });
  }
});

// Obtenir toutes les questions pour un sondage
router.get('/questions/:surveyId', async (req, res) => {
  try {
    // Extraire 'surveyId' des paramètres de la requête (adresse qui transporte les données dans l'URL)
    const { surveyId } = req.params;

    // Rechercher toutes les questions dans la collection MongoDB qui correspondent au 'surveyId' donné
    const questions = await SurveyQuestion.find({ surveyId });

    // Répondre avec la liste des questions au format JSON
    res.json(questions);
  } catch (error) {
    // Si une erreur se produit lors du processus, répondre avec un message d'erreur et le code HTTP 500 (Erreur Interne du Serveur)
    res.status(500).json({ error: 'Échec de la récupération des questions' });
  }
});

// Ajouter plus de routes pour la mise à jour et l'obtention d'une seule question si nécessaire

module.exports = router;

