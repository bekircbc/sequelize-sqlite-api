# import vs. require

      add "type":"module" in package.json
      import express from "express"

      const express = require('express')

- if you use sequelize, choose require instead of import.

# config.json in sequelize

      "development": {
      "dialect": "sqlite",
      "storage": "data/main.sqlite"
      },

# create Flaschcard model and migration

      sequelize model:generate --name Flashcard --attributes category:string,front:string,back:string
