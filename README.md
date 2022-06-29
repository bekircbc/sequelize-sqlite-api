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
