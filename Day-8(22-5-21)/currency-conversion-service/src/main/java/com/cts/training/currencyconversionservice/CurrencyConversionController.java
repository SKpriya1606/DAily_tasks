package com.cts.training.currencyconversionservice;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cts.training.currencyconversionservice.bean.CurrencyConversionBean;

@RestController
public class CurrencyConversionController {

	@GetMapping("/currency-converter/from/{from}/to/{to}/quantity/{quantity}")
	public CurrencyConversionBean convertCurrency(@PathVariable String from,
			@PathVariable String to,
			@PathVariable BigDecimal quantity) {
		
		Map<String,String> urivariables=new HashMap<>();
		urivariables.put("from", from);
		urivariables.put("to", to);
		
		ResponseEntity<CurrencyConversionBean> responseEntity=new RestTemplate().getForEntity("http://localhost:8000/currency-exchange/from/{from}/to/{to}", CurrencyConversionBean.class,urivariables);
		
		CurrencyConversionBean response=responseEntity.getBody();
		return new CurrencyConversionBean(response.getId(),from,to,response.getConverionMultiple(),quantity,quantity.multiply(response.getConverionMultiple()),response.getPort());	
		
		//return new CurrencyConversionBean(1L,from,to,BigDecimal.ONE,quantity,quantity,0);
	}
	
}
