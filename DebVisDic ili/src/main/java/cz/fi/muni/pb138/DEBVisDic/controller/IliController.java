package cz.fi.muni.pb138.DEBVisDic.controller;

import cz.fi.muni.pb138.DEBVisDic.service.interfaces.IliService;
import org.hibernate.validator.constraints.NotEmpty;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;


/**
 * Ili controller class
 *
 * @author Tomas Kopecky
 */
@CrossOrigin(origins = {"https://localhost:8443", "https://abulafia.fi.muni.cz:9011", "https://abulafia.fi.muni.cz:9001"})
@Validated
@RestController
@RequestMapping(value = "/ili")
public class IliController {

    private static final Logger logger = LoggerFactory.getLogger(IliController.class);


    @Autowired
    IliService iliService;

    /**
     * Controller method for getting ili from ili-map-pwn30.tab file saved on server
     *
     * @param id id we are looking for as string value
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    @RequestMapping(value="/tab30", method = RequestMethod.GET)
    public String getIliTab30(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTab30(id);
    }

    /**
     * Controller method for getting ili from ili-map-pwn31.tab file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    @RequestMapping(value="tab31", method = RequestMethod.GET)
    public String getIliTab31(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTab31(id);
    }


    /**
     * Controller method for getting ili from ili-map-wn30.ttl file saved on server
     *
     * @param id id we are looking for as string
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    @RequestMapping(value="ttl30", method = RequestMethod.GET)
    public String getIliTtl30(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTtl30(id);
    }

    /**
     * Controller method for getting ili from ili-map-wn31.ttl file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    @RequestMapping(value="ttl31", method = RequestMethod.GET)
    public String getIliTtl31(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTtl31(id);
    }

    /**
     * Controller method for getting ili from ili-map-wn13.ttl file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    @RequestMapping(value="ttl13", method = RequestMethod.GET)
    public String getIliTtl13(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTtl13(id);
    }

    /**
     * Controller method for getting ili from .ttl file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    @RequestMapping(value="ttlmap", method = RequestMethod.GET)
    public String getIliTtlMap(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTtlMap(id);
    }

    /**
     * Controller method for getting ili from changes-in-wn31.csv file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    @RequestMapping(value="csv", method = RequestMethod.GET)
    public String getIliCsv(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliCsv(id);
    }

    /**
     * Controller method for getting ili from ili.ttl file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    @RequestMapping(value="mainttl", method = RequestMethod.GET)
    public String getMainTtl(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliMainTtl(id);
    }

}
