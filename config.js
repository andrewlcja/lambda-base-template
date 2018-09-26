const config = {
  local: {
    expedia: {
      url: '',
      api_key: ''
    },
    aws: {
      access_key_id: '',
      secret_access_key: '',
      region: ''
    }
  },
  development: {
    expedia: {
      url: '',
      api_key: ''
    },
    aws: {
      access_key_id: '',
      secret_access_key: '',
      region: ''
    }
  },
  production: {
    expedia: {
      url: '',
      api_key: ''
    },
    aws: {
      access_key_id: '',
      secret_access_key: '',
      region: ''
    }
  }
}

module.exports = config[process.env.NODE_ENV || 'local'];