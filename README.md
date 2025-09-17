# 💊 Gestion des Pharmacies par Zone

Une application Spring Boot (API REST) permettant de gérer et consulter les pharmacies ouvertes dans une zone donnée.

## 🚀 Fonctionnalités
- ➕ Ajouter une pharmacie
- ✏️ Mettre à jour une pharmacie
- ❌ Supprimer une pharmacie
- 📋 Lister toutes les pharmacies
- 🔎 Rechercher une pharmacie par ID

## 🛠️ Technologies utilisées
- **Backend** : Spring Boot, Spring Data JPA, Hibernate  
- **Base de données** : H2 (en mémoire) / MySQL (optionnel)  
- **Frontend (prévu)** : Angular  
- **Tests API** : Postman / cURL  

## 📦 Installation et exécution
1. Cloner le projet :
   ```bash
   git clone https://github.com/ton-profil/nom-du-repo.git
   cd nom-du-repo
Lancer l’application :

bash
Copier le code
mvn spring-boot:run
Accéder à l’API :

bash
Copier le code
http://localhost:8081/pharmacies
📌 Exemples d’API
✅ Ajouter une pharmacie
http
Copier le code
POST /pharmacie
Content-Type: application/json

{
  "dateFrom": "2025-09-24",
  "dateTo": "2025-09-30",
  "lieu": "Rue MEDENINE",
  "pharmacieName": "Nouri",
  "adress2": "BENGUERDANE",
  "tel": 23784755
}
📋 Récupérer toutes les pharmacies
http
Copier le code
GET /pharmacies
✏️ Mettre à jour une pharmacie
http
Copier le code
PUT /pharmacies
Content-Type: application/json

{
  "id": 6,
  "dateFrom": "2025-09-24",
  "dateTo": "2025-09-30",
  "lieu": "Rue MEDENINE",
  "pharmacieName": "Nouri Modifiée",
  "adress2": "BENGUERDANE",
  "tel": 99999999
}
❌ Supprimer une pharmacie
http
Copier le code
DELETE /pharmacies/6
📝 Auteur
Projet réalisé par Noureddine TAHER 🎯



